package com.example.apirest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController //on détermine le role de la classe
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;
    //quand l'application démarre je n'ai pas besoin de créer un nouveau client de ClientRepository
    // il gère la fougère (initie le clientRepository, le clientController)

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
