[] Arreglar el modificar nota
[] agregar los endpoints para agregar categoria, eliminar categoria y modificar categoria
Para esto puedo hacer dentro de notes :@Post('/categories....') y tendria el endopoint ya existente
y categorias concatenado. Tambien deberia tener un endopoint categoria solo para agregar categorias solas
En cuanto al Service puedo hacer algo como lo siguiente:

async addCategoryToNote(noteId: number, categoryId: number): Promise<Note> {
const note = await this.noteRepository.findOne(noteId, {
relations: ['categories'],
});

    if (!note) {
      throw new NotFoundException('Note not found');
    }

    const category = await this.categoryRepository.findOne(categoryId);

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    note.categories = [...note.categories, category];
    return this.noteRepository.save(note);

}
}
[] agregar el front para las categorias
[x] Cambiar los endopoints para que los id sean por query parameters
[] Cambiar los fetching the datos para pasar el id por query parameters
[] Refactorizar Front para usar ReactQuery en vez de fetch, ademas usar axios para el fetch

```

```
