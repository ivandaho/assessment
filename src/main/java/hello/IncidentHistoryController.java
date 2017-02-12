package hello;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IncidentHistoryController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/incidenthistory")
    public IncidentHistory incidentHistory(
            @RequestParam(value="lat", defaultValue="1.31") String lat,
            @RequestParam(value="lng", defaultValue="103.86") String lng,
            @RequestParam(value="dummyindex", defaultValue="0") String dummyindex)
            {
        return new IncidentHistory(lat, lng, dummyindex);
    }
}
