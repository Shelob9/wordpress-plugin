<?php
namespace Josh\WordPressPlugin\Tests\Integration;

use PHPUnit\Framework\TestCase;

/**
 * Sample test case.
 */
class SampleTest extends TestCase {

	/**
	 * A single example test.
	 */
	function test_sample() {
		// Replace this with some actual testing code.
		$this->assertTrue( true );
	}

	function testWordPress()
    {
        global  $wpdb;
        $this->assertTrue(is_object($wpdb));
        $id = wp_insert_post([
            'post_type' => 'post',
            'post_title' => 'roy',
            'post_content' => 'sivan'
        ]);
        $this->assertTrue(is_numeric($id));
    }
}
