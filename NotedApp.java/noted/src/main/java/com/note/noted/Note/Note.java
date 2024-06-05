package com.note.noted.Note;
import com.note.noted.Category.Category;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Note {
    @Id
    @GeneratedValue
    private Integer id;
    private String title;
    @Column( length = 1000)
    private String content;
    private String bool;
    // Una de las entidades tiene que ser el owner de la relacion 
    // y se encarga de manter la FK en un jointable
    @ManyToMany  // Esta es la owner asi que en la otra debo darle el mapped atribute con categories
    @JoinTable(
            name = "notes_categories",
            joinColumns = {
                @JoinColumn(name = "note_id")
            },
            inverseJoinColumns = {
                @JoinColumn(name = "author_id")
            }
    )// Todo esto es porque es el owner asi que lo hago aca
    // le doy el nombre de la joinColumn ( pueden ser varias)
    // y tambien especifico la joinColumn de la otra tabla y le doy un nombre a ambos
    private List<Category> categories;
    
}
