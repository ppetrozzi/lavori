<?xml version="1.0" encoding="UTF-8"?>
<html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<body style="font-family:Arial;font-size:12pt;background-color:#FFEEEE">
<xsl:for-each select="scuola/classe/utente">
  <div style="background-color:teal;color:white;padding:4px">
    <span style="font-weight:bold"><xsl:value-of select="nome" /> - </span>
    <xsl:value-of select="cognome" />
  <div style="height:10px;background-color:#ffffff;"></div>
  </div>
  
</xsl:for-each>
</body>
</html>