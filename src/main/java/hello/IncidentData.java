package hello;

import java.util.*;

public class IncidentData {

    // private final HashMap<String, HashMap<String, String>> content = new HashMap<String, HashMap<String, String>>();
    private final ArrayList<HashMap<String, String>> content =
              new ArrayList<HashMap<String, String>> ();

    public IncidentData() {
        HashMap<String, String> item_01 = new HashMap<String, String>();
        item_01.put("lat", "1.33522");
        item_01.put("lng", "103,771872");
        item_01.put("description", "PIE");
        content.add(item_01);
        HashMap<String, String> item_02 = new HashMap<String, String>();
        item_02.put("lat", "1.331061");
        item_02.put("lng", "103,86076");
        item_02.put("description", "Lorong 6 Toa Payoh");
        content.add(item_02);
        HashMap<String, String> item_03 = new HashMap<String, String>();
        item_03.put("lat", "1.348829");
        item_03.put("lng", "103,871676");
        item_03.put("description", "Serangoon Ave 2");
        content.add(item_03);
        HashMap<String, String> item_04 = new HashMap<String, String>();
        item_04.put("lat", "1.367143");
        item_04.put("lng", "103.891996");
        item_04.put("description", "Hougang Ave 4");
        content.add(item_04);
    }

    public ArrayList<HashMap<String, String>> getContent() {
        return content;
    }
}
class SingleIncident {

    double lat;
    double lng;
    String description;

    public SingleIncident(double lat, double lng, String description) {
        this.lat = lat;
        this.lng = lng;
        this.description = description;
    }
}
