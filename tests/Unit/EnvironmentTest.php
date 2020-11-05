<?php


namespace Josh\WordPressPlugin\Tests\Unit;
use Josh\WordPressPlugin\Plugin;

/**
 * These tests prove test setup works.
 *
 * They are useful for debugging.
 */
class EnvironmentTest extends TestCase
{
    /**
     * A sample test showing that polyfills work
     *
     * @see https://github.com/Yoast/PHPUnit-Polyfills#using-this-library
     */
    public function testSomething()
    {
        $this->assertIsBool( true );
        self::assertIsNotIterable( new \stdClass() );
    }

    /**
     * A test ensuring that composer autloader works
     */
    public function testAutoloaderWorks()
    {
        $this->assertSame('Hi Roy', (new Plugin())->sayHi());
    }
}