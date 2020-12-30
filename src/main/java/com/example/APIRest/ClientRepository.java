package com.example.APIRest;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ClientRepository extends CrudRepository <Client, String>{

    List<Client> findByAll( String guid, String firstName, String lastName, String street, String city, int zip );

}
