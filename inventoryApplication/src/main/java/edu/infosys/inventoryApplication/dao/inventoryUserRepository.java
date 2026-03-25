package edu.infosys.inventoryApplication.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.infosys.inventoryApplication.bean.*;

public interface inventoryUserRepository extends JpaRepository<inventoryUser, String> {

	
}
