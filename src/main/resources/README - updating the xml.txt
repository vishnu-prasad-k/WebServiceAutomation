The database details can be saved under the file src/main/resources/database_details.xml
To generate hostname use the command tnsping server_name
e.g tnsping USG01100
Make sure to have unique name values in the XML



The service endpoints and the certificate details can be saved under the service_endpoints_certs.xml file



If password contains special characters then replace them with the below:
"   &quot;
'   &apos;
<   &lt;
>   &gt;
&   &amp;
For example, if your password is V(2-s<1! then the password in the XML file should be V(2-s&lt;1!