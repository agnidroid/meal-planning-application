package in.stackroute.notificationservice.service;

import in.stackroute.notificationservice.exceptions.NotificationNotFoundException;
import in.stackroute.notificationservice.model.Notification;
import in.stackroute.notificationservice.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NotificationServiceImpl implements NotificationService{

    private final NotificationRepository notificationRepository;

    @Override
    public List<Notification> getall() {
        return notificationRepository.findAll();
    }

    @Override
    public Notification getNotify(int id) {
        return notificationRepository.findById(id).orElseThrow(
                () -> new NotificationNotFoundException("Notification with id not found")
        );
    }
}
