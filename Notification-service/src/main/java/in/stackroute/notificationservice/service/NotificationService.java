package in.stackroute.notificationservice.service;

import in.stackroute.notificationservice.model.Notification;

import java.util.List;

public interface NotificationService {

    List<Notification> getall();

    Notification getNotify(int id);
}
