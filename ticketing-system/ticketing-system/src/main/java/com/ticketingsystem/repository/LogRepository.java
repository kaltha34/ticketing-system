package com.ticketingsystem.repository;

import com.ticketingsystem.model.Log;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LogRepository extends JpaRepository<Log, Long> {}
