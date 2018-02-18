import { Injectable } from '@angular/core';

@Injectable()
export class SpeciesDataService {
  species: Array<Object> = [
    {
      'name': 'Saccharomyces cerevisiae',
      'value': 'saccharomyces_cerevisiae'
    },
    {
      'name': 'Shrew mouse',
      'value': 'mus_pahari'
    },
    {
      'name': 'Zebra Finch',
      'value': 'taeniopygia_guttata'
    },
    {
      'name': 'Bushbaby',
      'value': 'otolemur_garnettii'
    },
    {
      'name': 'Hedgehog',
      'value': 'erinaceus_europaeus'
    },
    {
      'name': 'Anole lizard',
      'value': 'anolis_carolinensis'
    },
    {
      'name': 'Cod',
      'value': 'gadus_morhua'
    },
    {
      'name': 'Vervet-AGM',
      'value': 'chlorocebus_sabaeus'
    },
    {
      'name': 'Angola colobus',
      'value': 'colobus_angolensis_palliatus'
    },
    {
      'name': 'Dolphin',
      'value': 'tursiops_truncatus'
    },
    {
      'name': 'Mouse',
      'value': 'mus_musculus'
    },
    {
      'name': 'Cow',
      'value': 'bos_taurus'
    },
    {
      'name': 'Opossum',
      'value': 'monodelphis_domestica'
    },
    {
      'name': 'Caenorhabditis elegans',
      'value': 'caenorhabditis_elegans'
    },
    {
      'name': 'Megabat',
      'value': 'pteropus_vampyrus'
    },
    {
      'name': 'Mouse Lemur',
      'value': 'microcebus_murinus'
    },
    {
      'name': 'Drill',
      'value': 'mandrillus_leucophaeus'
    },
    {
      'name': 'Sheep',
      'value': 'ovis_aries'
    },
    {
      'name': 'Tarsier',
      'value': 'carlito_syrichta'
    },
    {
      'name': 'Mouse AKR/J',
      'value': 'mus_musculus_akrj'
    },
    {
      'name': 'Damara mole rat',
      'value': 'fukomys_damarensis'
    },
    {
      'name': 'Chinese softshell turtle',
      'value': 'pelodiscus_sinensis'
    },
    {
      'name': 'Cave fish',
      'value': 'astyanax_mexicanus'
    },
    {
      'name': 'Mouse A/J',
      'value': 'mus_musculus_aj'
    },
    {
      'name': 'Northern American deer mouse',
      'value': 'peromyscus_maniculatus_bairdii'
    },
    {
      'name': 'Flycatcher',
      'value': 'ficedula_albicollis'
    },
    {
      'name': 'Golden snub-nosed monkey',
      'value': 'rhinopithecus_roxellana'
    },
    {
      'name': 'Chinese hamster CHOK1GS',
      'value': 'cricetulus_griseus_chok1gshd'
    },
    {
      'name': 'Brazilian guinea pig',
      'value': 'cavia_aperea'
    },
    {
      'name': 'Kangaroo rat',
      'value': 'dipodomys_ordii'
    },
    {
      'name': 'Spotted gar',
      'value': 'lepisosteus_oculatus'
    },
    {
      'name': 'Duck',
      'value': 'anas_platyrhynchos'
    },
    {
      'name': 'Dog',
      'value': 'canis_familiaris'
    },
    {
      'name': 'Marmoset',
      'value': 'callithrix_jacchus'
    },
    {
      'name': 'Orangutan',
      'value': 'pongo_abelii'
    },
    {
      'name': 'Ferret',
      'value': 'mustela_putorius_furo'
    },
    {
      'name': 'Mouse C57BL/6NJ',
      'value': 'mus_musculus_c57bl6nj'
    },
    {
      'name': 'Xenopus',
      'value': 'xenopus_tropicalis'
    },
    {
      'name': 'Upper Galilee mountains blind mole rat',
      'value': 'nannospalax_galili'
    },
    {
      'name': 'Mouse PWK/PhJ',
      'value': 'mus_musculus_pwkphj'
    },
    {
      'name': 'Ma\'s night monkey',
      'value': 'aotus_nancymaae'
    },
    {
      'name': 'Mouse NZO/HlLtJ',
      'value': 'mus_musculus_nzohlltj'
    },
    {
      'name': 'Mouse 129S1/SvImJ',
      'value': 'mus_musculus_129s1svimj'
    },
    {
      'name': 'Mouse CBA/J',
      'value': 'mus_musculus_cbaj'
    },
    {
      'name': 'Guinea Pig',
      'value': 'cavia_porcellus'
    },
    {
      'name': 'Pika',
      'value': 'ochotona_princeps'
    },
    {
      'name': 'Chimpanzee',
      'value': 'pan_troglodytes'
    },
    {
      'name': 'Lamprey',
      'value': 'petromyzon_marinus'
    },
    {
      'name': 'Bonobo',
      'value': 'pan_paniscus'
    },
    {
      'name': 'Algerian mouse',
      'value': 'mus_spretus_spreteij'
    },
    {
      'name': 'Mouse C3H/HeJ',
      'value': 'mus_musculus_c3hhej'
    },
    {
      'name': 'Hyrax',
      'value': 'procavia_capensis'
    },
    {
      'name': 'Medaka',
      'value': 'oryzias_latipes'
    },
    {
      'name': 'Black snub-nosed monkey',
      'value': 'rhinopithecus_bieti'
    },
    {
      'name': 'Zebrafish',
      'value': 'danio_rerio'
    },
    {
      'name': 'Chicken',
      'value': 'gallus_gallus'
    },
    {
      'name': 'Tree Shrew',
      'value': 'tupaia_belangeri'
    },
    {
      'name': 'Bolivian squirrel monkey',
      'value': 'saimiri_boliviensis_boliviensis'
    },
    {
      'name': 'C.intestinalis',
      'value': 'ciona_intestinalis'
    },
    {
      'name': 'Amazon molly',
      'value': 'poecilia_formosa'
    },
    {
      'name': 'C.savignyi',
      'value': 'ciona_savignyi'
    },
    {
      'name': 'Microbat',
      'value': 'myotis_lucifugus'
    },
    {
      'name': 'Shrew',
      'value': 'sorex_araneus'
    },
    {
      'name': 'Golden Hamster',
      'value': 'mesocricetus_auratus'
    },
    {
      'name': 'Armadillo',
      'value': 'dasypus_novemcinctus'
    },
    {
      'name': 'Ryukyu mouse',
      'value': 'mus_caroli'
    },
    {
      'name': 'Mouse WSB/EiJ',
      'value': 'mus_musculus_wsbeij'
    },
    {
      'name': 'Sloth',
      'value': 'choloepus_hoffmanni'
    },
    {
      'name': 'Naked mole-rat female',
      'value': 'heterocephalus_glaber_female'
    },
    {
      'name': 'Lesser Egyptian jerboa',
      'value': 'jaculus_jaculus'
    },
    {
      'name': 'Chinese hamster CriGri',
      'value': 'cricetulus_griseus_crigri'
    },
    {
      'name': 'Pig',
      'value': 'sus_scrofa'
    },
    {
      'name': 'Rat',
      'value': 'rattus_norvegicus'
    },
    {
      'name': 'Prairie vole',
      'value': 'microtus_ochrogaster'
    },
    {
      'name': 'Tasmanian devil',
      'value': 'sarcophilus_harrisii'
    },
    {
      'name': 'Crab-eating macaque',
      'value': 'macaca_fascicularis'
    },
    {
      'name': 'Olive baboon',
      'value': 'papio_anubis'
    },
    {
      'name': 'Horse',
      'value': 'equus_caballus'
    },
    {
      'name': 'Platyfish',
      'value': 'xiphophorus_maculatus'
    },
    {
      'name': 'Macaque',
      'value': 'macaca_mulatta'
    },
    {
      'name': 'Mouse BALB/cJ',
      'value': 'mus_musculus_balbcj'
    },
    {
      'name': 'Pig-tailed macaque',
      'value': 'macaca_nemestrina'
    },
    {
      'name': 'Mouse DBA/2J',
      'value': 'mus_musculus_dba2j'
    },
    {
      'name': 'Coelacanth',
      'value': 'latimeria_chalumnae'
    },
    {
      'name': 'Mouse NOD/ShiLtJ',
      'value': 'mus_musculus_nodshiltj'
    },
    {
      'name': 'Stickleback',
      'value': 'gasterosteus_aculeatus'
    },
    {
      'name': 'Gorilla',
      'value': 'gorilla_gorilla'
    },
    {
      'name': 'Rabbit',
      'value': 'oryctolagus_cuniculus'
    },
    {
      'name': 'Tilapia',
      'value': 'oreochromis_niloticus'
    },
    {
      'name': 'Lesser hedgehog tenrec',
      'value': 'echinops_telfairi'
    },
    {
      'name': 'Gibbon',
      'value': 'nomascus_leucogenys'
    },
    {
      'name': 'Human',
      'value': 'homo_sapiens'
    },
    {
      'name': 'Mouse CAST/EiJ',
      'value': 'mus_musculus_casteij'
    },
    {
      'name': 'Platypus',
      'value': 'ornithorhynchus_anatinus'
    },
    {
      'name': 'Tetraodon',
      'value': 'tetraodon_nigroviridis'
    },
    {
      'name': 'Sooty mangabey',
      'value': 'cercocebus_atys'
    },
    {
      'name': 'Alpaca',
      'value': 'vicugna_pacos'
    },
    {
      'name': 'Turkey',
      'value': 'meleagris_gallopavo'
    },
    {
      'name': 'Mouse FVB/NJ',
      'value': 'mus_musculus_fvbnj'
    },
    {
      'name': 'Squirrel',
      'value': 'ictidomys_tridecemlineatus'
    },
    {
      'name': 'Degu',
      'value': 'octodon_degus'
    },
    {
      'name': 'Fugu',
      'value': 'takifugu_rubripes'
    },
    {
      'name': 'Capuchin',
      'value': 'cebus_capucinus'
    },
    {
      'name': 'Panda',
      'value': 'ailuropoda_melanoleuca'
    },
    {
      'name': 'Long-tailed chinchilla',
      'value': 'chinchilla_lanigera'
    },
    {
      'name': 'Cat',
      'value': 'felis_catus'
    },
    {
      'name': 'Naked mole-rat male',
      'value': 'heterocephalus_glaber_male'
    },
    {
      'name': 'Mouse LP/J',
      'value': 'mus_musculus_lpj'
    },
    {
      'name': 'Elephant',
      'value': 'loxodonta_africana'
    },
    {
      'name': 'Fruitfly',
      'value': 'drosophila_melanogaster'
    },
    {
      'name': 'Wallaby',
      'value': 'notamacropus_eugenii'
    },
    {
      'name': 'Coquerel\'s sifaka',
      'value': 'propithecus_coquereli'
    }
  ];
  constructor() { }

}
