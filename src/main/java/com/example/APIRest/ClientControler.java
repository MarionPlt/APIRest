package com.example.APIRest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


public class ClientControler {

    @Autowired
    private ClientRepository clients;

    @GetMapping(path = "/clients", produces = "application/json")
    public Iterable <Client> getClients(
            @RequestParam(value="guid", defaultValue = "%") String guid,
            @RequestParam(value="fistName", defaultValue = "%") String firsName,
            @RequestParam(value="lastName", defaultValue = "%") String lastName,
            @RequestParam(value="street", defaultValue = "%") String street,
            @RequestParam(value="city", defaultValue = "%") String city,
            @RequestParam(value="zip", defaultValue = "%") int zip){

        return clients.findByAll(guid,firsName,lastName,street,city,zip);
    }
}
