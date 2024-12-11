package com.ticketingsystem.controller;

import com.ticketingsystem.model.Config;
import com.ticketingsystem.service.TicketService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class TicketController {
    private final TicketService ticketService;
    private Config config;

    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @PostMapping("/configure")
    public String configureSystem(@RequestBody Config config) {
        this.config = config;
        return "Configuration saved.";
    }

    @PostMapping("/start")
    public String startSystem() {
        if (config != null) {
            ticketService.startSystem(config.getTicketReleaseRate(), config.getCustomerRetrievalRate());
            return "System started.";
        }
        return "Configuration not set.";
    }

    @PostMapping("/stop")
    public String stopSystem() {
        ticketService.stopSystem();
        return "System stopped.";
    }
}
