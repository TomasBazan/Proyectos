package com.note.noted.Note;

import com.note.noted.Note.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note,Integer> {
    
}
