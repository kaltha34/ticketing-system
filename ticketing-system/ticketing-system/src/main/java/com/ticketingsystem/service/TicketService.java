package com.ticketingsystem.service;

import com.ticketingsystem.model.Ticket;
import com.ticketingsystem.repository.TicketRepository;
import org.springframework.stereotype.Service;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

@Service
public class TicketService {
    private final TicketRepository ticketRepository;
    private final ScheduledExecutorService executorService = Executors.newScheduledThreadPool(2);

    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    public void startSystem(int ticketReleaseRate, int customerRetrievalRate) {
        executorService.scheduleAtFixedRate(() -> {
            Ticket ticket = new Ticket("AVAILABLE");
            ticketRepository.save(ticket);
            System.out.println("Ticket released: " + ticket.getId());
        }, 0, ticketReleaseRate, TimeUnit.SECONDS);

        executorService.scheduleAtFixedRate(() -> {
            ticketRepository.findAll().stream()
                    .filter(ticket -> ticket.getStatus().equals("AVAILABLE"))
                    .findFirst()
                    .ifPresent(ticket -> {
                        ticket.setStatus("RETRIEVED");
                        ticketRepository.save(ticket);
                        System.out.println("Ticket retrieved: " + ticket.getId());
                    });
        }, 0, customerRetrievalRate, TimeUnit.SECONDS);
    }

    public void stopSystem() {
        executorService.shutdown();
        System.out.println("System stopped.");
    }
}
