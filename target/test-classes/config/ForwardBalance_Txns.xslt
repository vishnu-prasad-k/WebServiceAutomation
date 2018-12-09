<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="text" />
    <xsl:template match="/">
        <xsl:if test="Response/cashTxn !='null'">
            <xsl:for-each select="Response/cashTxn">
                <xsl:text>pk=</xsl:text> <xsl:value-of select="statementEntryId"/> <xsl:text>|</xsl:text>
                <xsl:apply-templates select="tradeDate" />
                <xsl:text>|</xsl:text>
                <xsl:apply-templates select="valueDate" />
                <xsl:text>|</xsl:text>
                <xsl:apply-templates select="currentBalance" />
                <xsl:text>|</xsl:text>
                <xsl:apply-templates select="description" />
                <xsl:text>|</xsl:text>
                <xsl:apply-templates select="cashDebit" />
                <xsl:text>|</xsl:text>
                <xsl:apply-templates select="cashCredit" />
                <xsl:text>|</xsl:text>
                <xsl:apply-templates select="descAndSymbol" />
                <xsl:text>|</xsl:text>
                <xsl:apply-templates select="refNumber" />
                <xsl:text>|</xsl:text>
                <xsl:apply-templates select="statementEntryId" />
                <xsl:text>&#10;</xsl:text>
            </xsl:for-each>
        </xsl:if>

        <xsl:for-each select="Response/array">
            <xsl:choose>
                <xsl:when test="code='ERR404000'">
                    <xsl:value-of select="'pk=200'" />
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="'pk='" />
                    <xsl:value-of select="code" />
                </xsl:otherwise>
            </xsl:choose>
        </xsl:for-each>

        <xsl:if test="Response/nrtErrorMsg !='null' and Response/cashTxn = 'null'">
            <xsl:for-each select="Response/nrtErrorMsg">
                <xsl:text>pk=</xsl:text> <xsl:value-of select="statusCode" />
            </xsl:for-each>
        </xsl:if>

        <xsl:if test="Response/historyErrorMsg !='null' and Response/cashTxn = 'null'">
            <xsl:for-each select="Response/historyErrorMsg">
                <xsl:text>pk=</xsl:text> <xsl:value-of select="statusCode" />
            </xsl:for-each>
        </xsl:if>

    </xsl:template>

    <xsl:template match="*">
        <xsl:value-of select="name()" />
        <xsl:text>=</xsl:text>
        <xsl:value-of select="." />
    </xsl:template>

</xsl:stylesheet>