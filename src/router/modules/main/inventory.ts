const router: any = [
  {
    /** 
     * Trang kho 
     * Khắc Tiềm - 08.03.2023
     * */
    path: '/inventory',
    component: () => import('../../../views/main/inventory/inventoryMain/InventoryMain.vue'),
    meta: { title: 'page.inventory_main' }
  },
  {
    /** 
     * Trang kho
     * Khắc Tiềm - 08.03.2023
     * */
    path: '/inventory/depot',
    component: () => import('../../../views/main/inventory/depot/DepotPage.vue'),
    meta: { title: 'page.depot' }
  },
]

export default router;