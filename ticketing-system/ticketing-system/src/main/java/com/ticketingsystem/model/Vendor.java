package com.ticketingsystem.model;

public class Vendor {
    private int id;

    public Vendor(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void addTickets() {
        System.out.println("Vendor adding tickets...");
    }
}
