package api.tarefa.repository;

import api.tarefa.model.Tarefa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//A interface possuia a finalidade de realizar a manipulação dos dados da Entity Tarefa.
@Repository
public interface TarefaRepository extends JpaRepository<Tarefa, Long> {
}