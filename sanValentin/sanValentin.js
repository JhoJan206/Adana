document.getElementById('no-btn').addEventListener('mouseover', function() {
    this.style.position = 'fixed';
    const maxX = window.innerWidth - this.clientWidth;
    const maxY = window.innerHeight - this.clientHeight;
    this.style.left = `${Math.random() * maxX}px`;
    this.style.top = `${Math.random() * maxY}px`;
});