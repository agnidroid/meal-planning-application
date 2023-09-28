package in.stackroute.notificationservice.controller;

import in.stackroute.notificationservice.model.Notification;
import in.stackroute.notificationservice.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("http://localhost:4200")
@RequestMapping("api/v1/notify")
public class NotificationController {

    private final NotificationService notificationService;

    @GetMapping("all")
    ResponseEntity<List<Notification>> AllNotifications(){
        var notifies = notificationService.getall();
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(notifies);
    }

    @GetMapping("/{id}")
    ResponseEntity<Notification> Onenotificetion(@PathVariable("id") int id){
        var notify = notificationService.getNotify(id);
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(notify);
    }
}
