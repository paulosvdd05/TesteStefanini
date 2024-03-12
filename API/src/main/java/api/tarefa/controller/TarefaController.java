package api.tarefa.controller;

import api.tarefa.repository.TarefaService;
import api.tarefa.repository.TarefaDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(value = "/tarefas", produces = MediaType.APPLICATION_JSON_VALUE)
public class TarefaController {
    @Autowired
    private TarefaService tarefaService;

    //Endpoints: Criar, Obter todos registros, obter registro específico,
    @PostMapping// Mapeia as requisições POST para o método.
    @ResponseBody
    public TarefaDTO criar(@RequestBody TarefaDTO tarefaDTO) {
        return tarefaService.criar(tarefaDTO);
    }

    @GetMapping // Mapeia as requisições GET para o método.
    @ResponseBody
    public List<TarefaDTO> getAll()//Método que retorna todas as tarefas existentes
    {
        return tarefaService.getAll();
    }

    @GetMapping("/{tarefaId}") //Mapeia requisição GET para o método, identificando apenas uma tarefa
    @ResponseBody
    public TarefaDTO getTarefa(@PathVariable("tarefaId") Long tarefaId)//Método que retorna upenas uma tarefa de acordo com seu id
    {
        return tarefaService.getById(tarefaId);
    }

    @PutMapping("/{tarefaId}")// Mapeia as requisições PUT para o método.
    @ResponseBody
    public TarefaDTO atualizar(@PathVariable("tarefaId") Long tarefaId, @RequestBody TarefaDTO tarefaDTO) //Método responsavel por atualizar uma tarefa.
    {
        return tarefaService.atualizar(tarefaDTO, tarefaId);
    }


    @DeleteMapping("/{tarefaId}")//Mapeia requisições DELETE para o método, tendo como identificador "tarefaId"
    @ResponseBody
    public String deletar(@PathVariable("tarefaId") Long tarefaId) //Método para deletar a tarefa
    {
        return tarefaService.delete(tarefaId);
    }



}