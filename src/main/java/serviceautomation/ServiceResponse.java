package serviceautomation;

import java.util.Map;

/**
 * Created by v.prasad.kandangath on 4/1/2017.
 */
public class ServiceResponse {

    Map<String, String> map = null;
    String pk = null;

    boolean exactMatchRequired = false;

    public Map<String, String> getMap() {
        return map;
    }

    public void setMap(Map map) {
        this.map = map;
    }

    public String getPk() {
        return map.get("pk");
    }

    public void setPk(String pk) {
        this.pk = pk;
    }

    public boolean isExactMatchRequired() {
        return exactMatchRequired;
    }

    public void setExactMatchRequired(boolean exactMatchRequired) {
        this.exactMatchRequired = exactMatchRequired;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ServiceResponse other = (ServiceResponse) o;
        if (isExactMatchRequired()) {
            //If pk is null, compare the map
            //If map is same then objects are equal
            Map sourceMap = this.getMap();
            Map targetMap = other.getMap();
            if (sourceMap.equals(targetMap)) {
                return true;
            } else {
                return false;
            }
        } else {
            if (this.getPk().equals(other.getPk())) {
                return true;
            } else {
                return false;
            }
        }
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = hash + (this.getPk() != null ? this.getPk().hashCode() : 0);
        return hash;
    }

    @Override
    public String toString() {
        return map.toString();
    }

}
