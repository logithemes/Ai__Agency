from pathlib import Path
import re

root = Path(r'd:\Ai-Agency-main\Ai-Agency-main\straxon.webflow.io')
files = sorted([p for p in root.glob('*.html') if p.is_file()])

block = '''    <script src="assets/vendor/jquery.min.js"></script>
    <script src="assets/vendor/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/gsap.min.js"></script>
    <script src="assets/vendor/ScrollTrigger.min.js"></script>
    <script src="assets/vendor/swiper-bundle.min.js"></script>

    <!-- 2. YOUR CUSTOM SCRIPTS -->
    <script src="assets/js/utilities.js"></script>
    <script src="assets/js/pricing.js"></script>
    <script src="assets/js/counter.js"></script>
    <script src="assets/js/menu.js"></script>
    <script src="assets/js/hamburger.js"></script>
    <script src="assets/js/gsap-animations.js"></script>
    <script src="assets/js/gsap-utilities.js"></script>
    <script src="assets/js/slider-init.js"></script>
    <script src="assets/js/parallax.js"></script>

    <!-- 3. MAIN JS - ALWAYS LAST -->
    <script src="assets/js/main.js"></script>'''

pattern = re.compile(r'''(?is)<script\b[^>]*src=["']assets/(?:vendor|js)/jquery(?:\.min)?\.js["'][^>]*>\s*</script>.*?<script\b[^>]*src=["']assets/js/main\.js["'][^>]*>\s*</script>''')

changed = []
for path in files:
    text = path.read_text(encoding='utf-8')
    new_text, count = pattern.subn(block, text, count=1)
    if count:
        path.write_text(new_text, encoding='utf-8')
        changed.append(path.name)

print('\n'.join(changed))
print(f'TOTAL={len(changed)}')
