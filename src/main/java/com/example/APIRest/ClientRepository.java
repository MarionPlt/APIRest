package com.example.APIRest;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface ClientRepository extends CrudRepository <Client, String>{

    List<Client> findByAll( String guid, String firstName, String lastName, String street, String city, int zip );

}
