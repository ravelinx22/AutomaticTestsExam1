# AutomaticTestsExam1
Exam 1 of Automatic Tests course

## Instructions

These are the instructions for running the different tests for each platform.

## Web

### E2E

In folder **/AutomaticTestsExam1/Web/E2E/**

Install dependencies

```
npm i
```

Run E2E tests

```
npm test
```

### Headless

In folder **/AutomaticTestsExam1/Web/Headless/**

Install dependencies

```
npm i
```

Run headless tests

```
npm test
```

### Random Testing

In folder **/AutomaticTestsExam1/Web/RandomTesting/**

Install dependencies

```
npm i
```

Run random testing tests

```
npm test
```

### BDT

In folder **/AutomaticTestsExam1/Web/BDT/**

Install dependencies

```
npm i
```

Run BDT tests

```
npm test
```

## Móvil

### Random Testing

In folder **/AutomaticTestsExam1/Movil/RandomTesting/**

Run monkey testing tests

```
adb shell monkey -p de.danoeh.antennapod -v 10000
```

### BDT

In folder **/AutomaticTestsExam1/Movil/BDT/**

Install dependencies

```
bundle install
```

Run BDT tests

```
bundle exec calabash-android run ../AntennaPod.apk
```
