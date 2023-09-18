function tr (charCode: number) {
    qwiicopenlog.writeFile(qwiicopenlog.eADDR.LOG_Qwiic, fileName, "<tr>", qwiicopenlog.eCRLF.CRLF)
    for (let Index = 0; Index <= 15; Index++) {
        td(Index + charCode)
    }
    qwiicopenlog.writeFile(qwiicopenlog.eADDR.LOG_Qwiic, fileName, "</tr>", qwiicopenlog.eCRLF.CRLF)
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.setLedColor(0xff0000)
    qwiicopenlog.writeFile(qwiicopenlog.eADDR.LOG_Qwiic, fileName, "<html>", qwiicopenlog.eCRLF.CRLF)
    head()
    qwiicopenlog.writeFile(qwiicopenlog.eADDR.LOG_Qwiic, fileName, "<body>", qwiicopenlog.eCRLF.CRLF)
    qwiicopenlog.writeFile(qwiicopenlog.eADDR.LOG_Qwiic, fileName, "<h2>KeyPad - Zeichencode</h2>", qwiicopenlog.eCRLF.CRLF)
    table(bit.bit_hex8(bit.eHEX8bit.x20))
    table(bit.bit_hex8(bit.eHEX8bit.x30))
    table(bit.bit_hex8(bit.eHEX8bit.x40))
    table(bit.bit_hex8(bit.eHEX8bit.x50))
    table(bit.bit_hex8(bit.eHEX8bit.x60))
    table(bit.bit_hex8(bit.eHEX8bit.x70))
    qwiicopenlog.writeFile(qwiicopenlog.eADDR.LOG_Qwiic, fileName, "</body></html>", qwiicopenlog.eCRLF.CRLF)
    basic.setLedColor(0x00ff00)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    qwiicopenlog.syncFile(qwiicopenlog.eADDR.LOG_Qwiic)
    basic.turnRgbLedOff()
})
function table (charCode: number) {
    qwiicopenlog.writeFile(qwiicopenlog.eADDR.LOG_Qwiic, fileName, "<table border=\"5\">", qwiicopenlog.eCRLF.CRLF)
    tr(charCode)
    qwiicopenlog.writeFile(qwiicopenlog.eADDR.LOG_Qwiic, fileName, "</table>", qwiicopenlog.eCRLF.CRLF)
    basic.pause(100)
}
function td (charCode: number) {
    keyCode = convertToText(charCode - 32)
    if (keyCode.length == 1) {
        keyCode = "0" + keyCode
    }
    qwiicopenlog.writeFile(qwiicopenlog.eADDR.LOG_Qwiic, fileName, "<td><b>" + String.fromCharCode(charCode) + "</b>", qwiicopenlog.eCRLF.CRLF)
    basic.pause(10)
    qwiicopenlog.writeFile(qwiicopenlog.eADDR.LOG_Qwiic, fileName, "<br/>" + keyCode + "</td>", qwiicopenlog.eCRLF.CRLF)
    basic.pause(10)
}
function head () {
    qwiicopenlog.writeFile(qwiicopenlog.eADDR.LOG_Qwiic, fileName, "<head><title>" + fileName + "</title><style type=\"text/css\">" + "td {text-align: center; font-size: 12pt; padding: 12px;}" + "b {font-size: 18pt;}" + "body {font-family: Sans-Serif;}" + "table {margin-top: 40px; margin-bottom: 40px;}" + "</style></head>", qwiicopenlog.eCRLF.CRLF)
}
let keyCode = ""
let fileName = ""
qwiicopenlog.checkStatusRegister(qwiicopenlog.eADDR.LOG_Qwiic)
fileName = "KEY10.HTM"
basic.showIcon(IconNames.Target)
