from pathlib import Path
import re

root = Path(r'D:\Ai-Agency-main\Ai-Agency-main\straxon.webflow.io')
pattern = re.compile(r'<div\b(?P<wrap_attrs>[^>]*class="(?P<wrap_class>[^"]*\bbutton-wrapper\b[^"]*)"[^>]*)>\s*<a\b(?P<a_attrs>[^>]*)>(?P<label>.*?)</a>\s*<div\s+class="button-border-effect"></div>\s*</div>', re.I | re.S)
old_anchor_classes = {'tp-btn', 'tp-common-white', 'tp-common-white-primary', 'bg-transparent', 'border', 'border-white', 'pricing-button'}

changed = []
for path in root.rglob('*.html'):
    text = path.read_text(encoding='utf-8')
    def repl(m):
        wrap_attrs = m.group('wrap_attrs')
        wrap_class = m.group('wrap_class')
        a_attrs = m.group('a_attrs')
        label = m.group('label') or ''

        wrapper_classes = []
        wrap_class_match = re.search(r'class="([^"]*)"', wrap_attrs)
        if wrap_class_match:
            for cls in wrap_class_match.group(1).split():
                if cls and cls != 'button-wrapper':
                    wrapper_classes.append(cls)

        anchor_classes = []
        anchor_class_match = re.search(r'class="([^"]*)"', a_attrs)
        if anchor_class_match:
            for cls in anchor_class_match.group(1).split():
                if cls and cls not in old_anchor_classes:
                    anchor_classes.append(cls)

        href = ''
        href_match = re.search(r'href="([^"]*)"', a_attrs)
        if href_match:
            href = href_match.group(1)

        attrs = [f'href="{href}"' if href else 'href="#"']
        class_parts = ['tp-button-wrapper'] + wrapper_classes + anchor_classes
        attrs.append(f'class="{" ".join(class_parts)}"')

        for source in [wrap_attrs, a_attrs]:
            for attr in re.finditer(r'([A-Za-z_:][-A-Za-z0-9_:.\-]*)(?:="([^"]*)")?', source):
                name = attr.group(1)
                if name.lower() in {'class', 'href'}:
                    continue
                value = attr.group(2) if attr.group(2) is not None else ''
                if value:
                    attrs.append(f'{name}="{value}"')
                else:
                    attrs.append(name)

        seen = set(); deduped = []
        for part in attrs:
            if part not in seen:
                seen.add(part)
                deduped.append(part)

        label_text = re.sub(r'<[^>]+>', '', label).strip()
        label_text = re.sub(r'\s+', ' ', label_text)
        if not label_text:
            label_text = 'Learn More'

        inner = (
            '<span class="tp-button-text">'
            f'<span class="tp-button-front">{label_text}</span>'
            f'<span class="tp-button-back">{label_text}</span>'
            '</span>'
            '<span class="tp-button-icon">'
            '<span class="tp-button-arrow">'
            '<i class="bi bi-arrow-right"></i>'
            '<i class="bi bi-arrow-right"></i>'
            '</span>'
            '</span>'
        )
        return '<a ' + ' '.join(deduped) + '>' + inner + '</a>'

    new_text, count = pattern.subn(repl, text)
    if count:
        path.write_text(new_text, encoding='utf-8')
        changed.append((path.relative_to(root).as_posix(), count))

print('\n'.join(f'{p}: {c}' for p, c in changed))
