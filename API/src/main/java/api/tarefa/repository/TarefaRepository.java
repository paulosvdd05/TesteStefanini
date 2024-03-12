package api.tarefa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import api.tarefa.model.Tarefa;
@Repository
public interface TarefaRepository extends JpaRepository<Tarefa, Long> {
}