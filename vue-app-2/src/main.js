
importer Vue depuis  'vue' 
importer {BootstrapVue, IconsPlugin} depuis  'bootstrap-vue'

// Importez des fichiers CSS Bootstrap et BootstrapVue (l'ordre est important) 
import  'bootstrap / dist / css / bootstrap.css' 
import  'bootstrap-vue / dist / bootstrap-vue.css'

// Rendre BootstrapVue disponible tout au long de votre projet
Vue.use (BootstrapVue)
// Installer éventuellement le plugin des composants d'icônes BootstrapVue 
Vue.use (IconsPlugin)