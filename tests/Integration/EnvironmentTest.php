<?php
namespace Josh\WordPressPlugin\Tests\Integration;

use Josh\WordPressPlugin\Tests\Unit\TestCase;

/**
 * These tests proves integration test setup works.
 *
 * They are useful for debugging, you may choose to delete
 */
class EnvironmentTest extends TestCase {

    /**
     * A sample test showing that polyfills work
     *
     * @see https://github.com/Yoast/PHPUnit-Polyfills#using-this-library
     */
    public function testPolyfills()
    {
        $this->assertIsBool( true );
        self::assertIsNotIterable( new \stdClass() );
    }

    /**
     * This tests makes sure:
     *
     * - WordPress functions are defined
     * - WordPress database can be written to.
     */
	function testWordPress()
    {
        global  $wpdb;
        $this->assertIsObject($wpdb);
        $id = wp_insert_post([
            'post_type' => 'post',
            'post_title' => 'roy',
            'post_content' => 'sivan'
        ]);
        $this->assertIsNumeric($id);
    }
}
