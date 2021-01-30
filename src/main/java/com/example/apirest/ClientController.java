package com.example.apirest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:4201")
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;


    @GetMapping(path = "/clients", produces = "application/json")
    public Iterable<Client> getClients(
            @RequestParam(value = "guid", defaultValue = "") String guid,
            @RequestParam(value = "firstName", defaultValue = "") String firstName,
            @RequestParam(value = "lastName", defaultValue = "") String lastName,
            @RequestParam(value = "street", defaultValue = "") String street,
            @RequestParam(value = "city", defaultValue = "") String city,
            @RequestParam(value = "zip", defaultValue = "0") int zip
    ) {
        return clientRepository.findByGuidContainsAndFirstNameContainsAndLastNameContainsAndStreetContainsAndCityContainsAndZipContainsAllIgnoreCase(guid,firstName, lastName,street, city, zip);

    }
}
