const db = require("../../models/index")


/**
 * Función para buscar un registro que coincida con la condición suministrada
 * @param name nombre del modelo
 * @param query consulta del registro
 * @returns objeto encontrado o objeto vacío
 */
async function find(name, query) {
    return await this.db[name].findOne(query);
    // ToDo: Espacio para auditoria
}

/**
* Función para registrar o crear en base de datos
* @param name nombre del modelo
* @param data datos a insertar
* @returns respuesta de la operación
*/
async function create(name, data) {
    return await this.db[name].create(data);
    // ToDo: Espacio para auditoria
}

/**
 * Función para actualizar un registro o arreglo de registros
 * @param name nombre del modelo
 * @param data datos a actualizar
 * @param query condición WHERE para actualizar
 * @returns respuesta de la operación
 */
async function update(name, data, query) {
    if (data?.Id) delete data.Id;
    return await this.db[name].update(data, query);
    // ToDo: Espacio para auditoria
}

/**
 * Función en próximo desuso para eliminado físico de un registro
 * Por recomendación se opta por eliminado lógico con columna Deleted
 * @param name nombre del modelo
 * @param query condición para eliminar
 * @returns resultado de la operación
 */
async function deleteItems(name, query) {
    return await this.db[name].destroy(query);
    // ToDo: Espacio para auditoria}
}
