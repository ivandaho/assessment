package hello;

import java.util.*;

public class IncidentHistory {

    // private final HashMap<String, HashMap<String, String>> content = new HashMap<String, HashMap<String, String>>();
    private final ArrayList<ArrayList<String>> content =
              new ArrayList<ArrayList<String>> ();
    private final int dummyindex;

    public IncidentHistory(String lat, String lng, String dummyindex) {
        this.dummyindex = Integer.parseInt(dummyindex);
    }

    private ArrayList<ArrayList<String>> getFakeHistory(){
        ArrayList<ArrayList<String>> fakedata = new ArrayList<ArrayList<String>>();
        if (dummyindex == 0) {
            fakedata.add(makeAFakeDay("2017, 01, 12", "2"));
            fakedata.add(makeAFakeDay("2017, 01, 18", "3"));
            fakedata.add(makeAFakeDay("2017, 01, 23", "7"));
            fakedata.add(makeAFakeDay("2017, 01, 30", "4"));
            fakedata.add(makeAFakeDay("2017, 02, 12", "3"));
        } else if (dummyindex == 1) {
            fakedata.add(makeAFakeDay("2017, 01, 11", "2"));
            fakedata.add(makeAFakeDay("2017, 01, 12", "3"));
            fakedata.add(makeAFakeDay("2017, 01, 16", "7"));
            fakedata.add(makeAFakeDay("2017, 01, 21", "2"));
            fakedata.add(makeAFakeDay("2017, 01, 22", "4"));
            fakedata.add(makeAFakeDay("2017, 02, 05", "4"));
            fakedata.add(makeAFakeDay("2017, 02, 12", "3"));
        } else if (dummyindex == 2) {
            fakedata.add(makeAFakeDay("2017, 01, 13", "2"));
            fakedata.add(makeAFakeDay("2017, 01, 15", "3"));
            fakedata.add(makeAFakeDay("2017, 01, 22", "4"));
            fakedata.add(makeAFakeDay("2017, 01, 28", "5"));
            fakedata.add(makeAFakeDay("2017, 01, 31", "4"));
            fakedata.add(makeAFakeDay("2017, 02, 12", "3"));
        }



        return fakedata;
    }

    private ArrayList<String> makeAFakeDay(String dateString, String num) {
        ArrayList<String> fakeday = new ArrayList<String>();

        fakeday.add(dateString);
        fakeday.add(num);

        return fakeday;
    }


    public ArrayList<ArrayList<String>> getContent() {
        return getFakeHistory();
    }
}
