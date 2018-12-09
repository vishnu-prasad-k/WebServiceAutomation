When the attribute in the service response contains "."
e.g. if the service response attribute name is 'holding.name' then the json path should be $..['holding.name']

When you need to verify some json attribute with respect to some value
$..[?(@.CIF==<CIF>)].date