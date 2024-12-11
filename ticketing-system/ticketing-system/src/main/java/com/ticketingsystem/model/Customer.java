package com.ticketingsystem.model;

public class Customer {
    private int id;

    public Customer(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void retrieveTickets() {
        System.out.println("Customer retrieving tickets...");
    }
}
