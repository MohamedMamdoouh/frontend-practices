function showInfo() {
  document.getElementById("info").innerHTML = `
      <strong>Screen Width:</strong> ${screen.width}px <br>
      <strong>Screen Height:</strong> ${screen.height}px <br><br>

      <strong>Available Width:</strong> ${screen.availWidth}px <br>
      <strong>Available Height:</strong> ${screen.availHeight}px <br><br>

      <strong>Color Depth:</strong> ${screen.colorDepth} bits <br>
      <strong>Pixel Depth:</strong> ${screen.pixelDepth} bits
    `;
}
