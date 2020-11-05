<?php


namespace Josh\WordPressPlugin\Tests\Unit;



class FooTest extends UnitTestCase
{

    public function testSomething()
    {
        $this->assertIsBool( true );
        self::assertIsNotIterable( new \stdClass() );
    }
}