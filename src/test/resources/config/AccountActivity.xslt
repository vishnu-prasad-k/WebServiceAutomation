<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="text" />
    <xsl:variable name="pipe_sep" select="'|'" />
    <xsl:template match="/">
        <xsl:variable name="allocationGroup" select="'asset category'" />
        <xsl:for-each select="Response/cashTxn">
            <xsl:value-of select="'pk='"/><xsl:value-of select="backOffTxnNumber"/><xsl:value-of select="$pipe_sep"/>
            <xsl:value-of select="'statementEntryId='"/>
            <xsl:value-of select="backOffTxnNumber" />
            <xsl:value-of select="$pipe_sep" />
            <xsl:value-of select="'description='" />
            <xsl:value-of select="description"/>
            <xsl:value-of select="$pipe_sep"/>
            <xsl:value-of select="'descAndSymbol='"/>
            <xsl:value-of select="descAndSymbol"/>
            <xsl:if test="not(position()=last())">
                <xsl:text>&#10;</xsl:text>
            </xsl:if>
        </xsl:for-each>
    </xsl:template>

</xsl:stylesheet>