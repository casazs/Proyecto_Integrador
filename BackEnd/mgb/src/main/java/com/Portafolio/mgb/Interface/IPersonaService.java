package com.Portafolio.mgb.Interface;

import com.Portafolio.mgb.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    
    public List<Persona> getPersona(); 
    
    //guardar persona
    public void savePersona(Persona persona);
    
    //eliminar persona por Id
    public void deletePersona(Long id);
    
    //Buscar una Persona
    public Persona findPersona(Long id);
    
}
