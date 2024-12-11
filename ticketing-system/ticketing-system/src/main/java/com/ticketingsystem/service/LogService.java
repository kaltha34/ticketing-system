package com.ticketingsystem.service;

import com.ticketingsystem.model.Log;
import com.ticketingsystem.repository.LogRepository;
import org.springframework.stereotype.Service;

@Service
public class LogService {
    private final LogRepository logRepository;

    public LogService(LogRepository logRepository) {
        this.logRepository = logRepository;
    }

    public void logTransaction(String message) {
        Log log = new Log(message);
        logRepository.save(log);
        System.out.println("Log: " + message);
    }
}
