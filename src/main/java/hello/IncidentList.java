package hello;
import java.util.*;

public class IncidentList {

    private ArrayList<HashMap<String, String>> content =
              new ArrayList<HashMap<String, String>> ();
    private final int dummyindex;

    public IncidentList(String dummyindex) {
        this.dummyindex = Integer.parseInt(dummyindex);
        fillContent();
    }
    private void fillContent() {
        if (dummyindex == 0) {
            content.add(createIncident("2017-02-12 13:07",   "PIE"));
            content.add(createIncident("2017-02-06 00:21",  "Ang Mo Kio Street 33"));
            content.add(createIncident("2017-02-01 08:04",  "Lorong 5 Serangoon Gardens"));
            content.add(createIncident("2017-01-28 13:01",  "45 Sengkang View"));
            content.add(createIncident("2017-01-23 15:57",  "Kallang Street 74"));
            content.add(createIncident("2017-01-22 08:22",  "Marine Parade Street 30"));
            content.add(createIncident("2017-01-19 09:06",  "Hougang Green"));
            content.add(createIncident("2017-01-17 22:42",  "Lorong 2 Thomson"));
            content.add(createIncident("2017-01-14 19:52",  "Paya Lebar Avenue"));
            content.add(createIncident("2017-01-12 03:18",  "Boon Lay Avenue North"));
        } else if (dummyindex == 1) {
            content.add(createIncident("2017-02-12 18:53",  "Lorong 6 Toa Payoh"));
            content.add(createIncident("2017-02-06 19:07",  "Yishun Street 84"));
            content.add(createIncident("2017-02-04 16:47",  "Bukit Panjang Avenue"));
            content.add(createIncident("2017-02-04 19:34",  "Jalan Dusun 2"));
            content.add(createIncident("2017-02-01 12:20",  "Serangoon Gardens Street 34"));
            content.add(createIncident("2017-01-31 21:36",  "Jurong East Street 10"));
            content.add(createIncident("2017-01-22 23:42",  "Lorong 8 Boon Keng"));
            content.add(createIncident("2017-01-20 07:32",  "Pasir Ris Crescent"));
            content.add(createIncident("2017-01-14 08:49",  "Lorong 5 Balestier"));
        } else if (dummyindex == 2) {
            content.add(createIncident("2017-02-12 18:10",  "Serangoon Ave 2"));
            content.add(createIncident("2017-02-06 23:47",  "Jalan Pintau"));
            content.add(createIncident("2017-02-01 09:28",  "Serangoon Gardens Street 87"));
            content.add(createIncident("2017-01-29 22:04",  "Somerset Terrace"));
            content.add(createIncident("2017-01-23 16:09",  "Tampines Street 25"));
            content.add(createIncident("2017-01-20 02:06",  "Yishun Court"));
            content.add(createIncident("2017-01-17 23:48",  "Pasir Ris Street 34"));
            content.add(createIncident("2017-01-13 12:29",  "Serangoon Gardens Street 32"));
        }
    }

    private HashMap<String, String> createIncident(String datetimestring, String loc) {
        HashMap<String, String> returnable = new HashMap<String, String>();
        returnable.put("datetime", datetimestring);
        returnable.put("location", loc);
        return returnable;
    }
    public ArrayList<HashMap<String, String>> getContent() {
        return content;
    }
}
