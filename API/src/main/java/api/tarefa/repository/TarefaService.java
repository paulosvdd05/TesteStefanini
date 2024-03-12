package api.tarefa.repository;

import api.tarefa.model.Tarefa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

//Classe responsavel pelas operações de CRUD da Entity Tarefa.
@Service
public class TarefaService {
    @Autowired
    private TarefaRepository repository;

    public TarefaDTO criar(TarefaDTO tarefaDTO) {
        Tarefa tarefa = new Tarefa();
        tarefa.setDescricao(tarefaDTO.getDescricao());
        tarefa.setTitulo(tarefaDTO.getTitulo());
        tarefa.setStatus(tarefaDTO.getStatus());
        repository.save(tarefa);
        tarefaDTO.setId(tarefa.getId());
        return  tarefaDTO;
    }

    public TarefaDTO atualizar (TarefaDTO tarefaDTO, Long tarefaId) {
        Tarefa tarefaDatabase = repository.getOne(tarefaId);
        tarefaDatabase.setTitulo(tarefaDTO.getTitulo());
        tarefaDatabase.setDescricao(tarefaDTO.getTitulo());
        tarefaDatabase.setStatus(tarefaDTO.getStatus());
        repository.save(tarefaDatabase);
        return tarefaDTO;
    }

    private TarefaDTO converter (Tarefa tarefa) {
        TarefaDTO result = new TarefaDTO();
        result.setId(tarefa.getId());
        result.setTitulo(tarefa.getTitulo());
        result.setDescricao(tarefa.getDescricao());
        result.setStatus(tarefa.getStatus());
        return result;
    }

    public List<TarefaDTO> getAll () {
        return repository
                .findAll()
                .stream()
                .map(this::converter).collect(Collectors.toList());
    }

    public TarefaDTO getById(Long tarefaId) {
        Tarefa tarefa = repository.findById(tarefaId).orElse(null);
        if (tarefa != null) {
            return converter(tarefa);
        }
        return null;
    }



    public String delete (Long tarefaId) {
        repository.deleteById(tarefaId);
        return "DELETED";
    }
}