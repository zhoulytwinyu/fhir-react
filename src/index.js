import Fancy from './Fancy'
import TodoList from './TodoList'
import FhirResource from './components/container/FhirResource'
import Patient from './components/resources/Patient'
import MedicationStatement from './components/resources/MedicationStatement';
import MedicationOrder from './components/resources/MedicationOrder';
import Encounter from './components/resources/Encounter'


var Resources = {Patient,Encounter, MedicationStatement, MedicationOrder}

module.exports = {
		Resources: Resources,
		FhirResource: FhirResource,
    MedicationStatement: MedicationStatement,
		Patient: Patient,
		Fancy: Fancy,
		TodoList: TodoList,
    MedicationOrder: MedicationOrder
}
