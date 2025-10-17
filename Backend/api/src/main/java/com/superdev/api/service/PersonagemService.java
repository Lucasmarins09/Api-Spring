package com.superdev.api.service;

import com.superdev.api.model.Personagem;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PersonagemService {

    private List<Personagem> personagemList = new ArrayList<>();
    private int sequenciaId = 1;

    public List<Personagem> obterTodosPersonagens() {
        return this.personagemList;
    }

    public Personagem addPersonagem(Personagem personagem) {
        personagem.setId(sequenciaId);

        this.personagemList.add(personagem);
        sequenciaId++;

        return personagem;
    }

}