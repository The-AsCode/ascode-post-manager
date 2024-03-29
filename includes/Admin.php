<?php

namespace AsCode\PostManager;

class Admin {
    public function __construct() {
        $this->load_admin_files();
    }

    /**
     * Load admin files
     *
     * @return void
     */
    public function load_admin_files() {
        new Admin\Menu();
        new Admin\Enqueue();
    }
}