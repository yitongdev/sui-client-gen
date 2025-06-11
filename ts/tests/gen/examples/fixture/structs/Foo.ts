import * as reified from "../../../_framework/reified.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeArgument,
  ToTypeStr,
  TypeArgument,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  fieldToJSON,
  phantom,
  toBcs,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { Vector } from "../../../_framework/vector.js";
import { UID } from "../../../sui/object/structs/index.js";
import { PKG_V1 } from "../../constants.js";
import { StructFromOtherModule } from "../../other-module/structs/index.js";
import { Bar as Bar1 } from "./Bar.js";
import { Dummy as Dummy1 } from "./Dummy.js";
import { WithTwoGenerics as WithTwoGenerics1 } from "./WithTwoGenerics.js";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isFoo(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::fixture::Foo` + "<");
}

export interface FooFields<T extends TypeArgument> {
  id: ToField<UID>;
  generic: ToField<T>;
  reifiedPrimitiveVec: ToField<Vector<"u64">>;
  reifiedObjectVec: ToField<Vector<Bar1>>;
  genericVec: ToField<Vector<T>>;
  genericVecNested: ToField<Vector<WithTwoGenerics1<T, "u8">>>;
  twoGenerics: ToField<WithTwoGenerics1<T, Bar1>>;
  twoGenericsReifiedPrimitive: ToField<WithTwoGenerics1<"u16", "u64">>;
  twoGenericsReifiedObject: ToField<WithTwoGenerics1<Bar1, Bar1>>;
  twoGenericsNested: ToField<WithTwoGenerics1<T, WithTwoGenerics1<"u8", "u8">>>;
  twoGenericsReifiedNested: ToField<
    WithTwoGenerics1<Bar1, WithTwoGenerics1<"u8", "u8">>
  >;
  twoGenericsNestedVec: ToField<
    Vector<WithTwoGenerics1<Bar1, Vector<WithTwoGenerics1<T, "u8">>>>
  >;
  dummy: ToField<Dummy1>;
  other: ToField<StructFromOtherModule>;
}

export type FooReified<T extends TypeArgument> = Reified<Foo<T>, FooFields<T>>;

/**
 * Move struct: `Foo`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::fixture`
 *
 * @typeParam T - Type parameter 0
 */
export class Foo<T extends TypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::fixture::Foo`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [false] as const;

  readonly $typeName = Foo.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::fixture::Foo<${ToTypeStr<T>}>`;
  readonly $typeArgs: [ToTypeStr<T>];
  readonly $isPhantom = Foo.$isPhantom;

  readonly id: ToField<UID>;
  readonly generic: ToField<T>;
  readonly reifiedPrimitiveVec: ToField<Vector<"u64">>;
  readonly reifiedObjectVec: ToField<Vector<Bar1>>;
  readonly genericVec: ToField<Vector<T>>;
  readonly genericVecNested: ToField<Vector<WithTwoGenerics1<T, "u8">>>;
  readonly twoGenerics: ToField<WithTwoGenerics1<T, Bar1>>;
  readonly twoGenericsReifiedPrimitive: ToField<WithTwoGenerics1<"u16", "u64">>;
  readonly twoGenericsReifiedObject: ToField<WithTwoGenerics1<Bar1, Bar1>>;
  readonly twoGenericsNested: ToField<
    WithTwoGenerics1<T, WithTwoGenerics1<"u8", "u8">>
  >;
  readonly twoGenericsReifiedNested: ToField<
    WithTwoGenerics1<Bar1, WithTwoGenerics1<"u8", "u8">>
  >;
  readonly twoGenericsNestedVec: ToField<
    Vector<WithTwoGenerics1<Bar1, Vector<WithTwoGenerics1<T, "u8">>>>
  >;
  readonly dummy: ToField<Dummy1>;
  readonly other: ToField<StructFromOtherModule>;

  private constructor(typeArgs: [ToTypeStr<T>], fields: FooFields<T>) {
    this.$fullTypeName = composeSuiType(
      Foo.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::fixture::Foo<${ToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.generic = fields.generic;
    this.reifiedPrimitiveVec = fields.reifiedPrimitiveVec;
    this.reifiedObjectVec = fields.reifiedObjectVec;
    this.genericVec = fields.genericVec;
    this.genericVecNested = fields.genericVecNested;
    this.twoGenerics = fields.twoGenerics;
    this.twoGenericsReifiedPrimitive = fields.twoGenericsReifiedPrimitive;
    this.twoGenericsReifiedObject = fields.twoGenericsReifiedObject;
    this.twoGenericsNested = fields.twoGenericsNested;
    this.twoGenericsReifiedNested = fields.twoGenericsReifiedNested;
    this.twoGenericsNestedVec = fields.twoGenericsNestedVec;
    this.dummy = fields.dummy;
    this.other = fields.other;
  }

  static reified<T extends Reified<TypeArgument, any>>(
    T: T,
  ): FooReified<ToTypeArgument<T>> {
    return {
      typeName: Foo.$typeName,
      fullTypeName: composeSuiType(
        Foo.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V1}::fixture::Foo<${ToTypeStr<ToTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [ToTypeStr<ToTypeArgument<T>>],
      isPhantom: Foo.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) => Foo.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Foo.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => Foo.fromBcs(T, data),
      bcs: Foo.bcs(toBcs(T)),
      fromJSONField: (field: any) => Foo.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => Foo.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Foo.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Foo.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) => Foo.fetch(client, T, id),
      new: (fields: FooFields<ToTypeArgument<T>>) => {
        return new Foo([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Foo.reified;
  }

  static phantom<T extends Reified<TypeArgument, any>>(
    T: T,
  ): PhantomReified<ToTypeStr<Foo<ToTypeArgument<T>>>> {
    return phantom(Foo.reified(T));
  }
  static get p() {
    return Foo.phantom;
  }

  static get bcs() {
    return <T extends BcsType<any>>(T: T) =>
      bcs.struct(`Foo<${T.name}>`, {
        id: UID.bcs,
        generic: T,
        reified_primitive_vec: bcs.vector(bcs.u64()),
        reified_object_vec: bcs.vector(Bar1.bcs),
        generic_vec: bcs.vector(T),
        generic_vec_nested: bcs.vector(WithTwoGenerics1.bcs(T, bcs.u8())),
        two_generics: WithTwoGenerics1.bcs(T, Bar1.bcs),
        two_generics_reified_primitive: WithTwoGenerics1.bcs(
          bcs.u16(),
          bcs.u64(),
        ),
        two_generics_reified_object: WithTwoGenerics1.bcs(Bar1.bcs, Bar1.bcs),
        two_generics_nested: WithTwoGenerics1.bcs(
          T,
          WithTwoGenerics1.bcs(bcs.u8(), bcs.u8()),
        ),
        two_generics_reified_nested: WithTwoGenerics1.bcs(
          Bar1.bcs,
          WithTwoGenerics1.bcs(bcs.u8(), bcs.u8()),
        ),
        two_generics_nested_vec: bcs.vector(
          WithTwoGenerics1.bcs(
            Bar1.bcs,
            bcs.vector(WithTwoGenerics1.bcs(T, bcs.u8())),
          ),
        ),
        dummy: Dummy1.bcs,
        other: StructFromOtherModule.bcs,
      });
  }

  static fromFields<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    fields: Record<string, any>,
  ): Foo<ToTypeArgument<T>> {
    return Foo.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      generic: decodeFromFields(typeArg, fields.generic),
      reifiedPrimitiveVec: decodeFromFields(
        reified.vector("u64"),
        fields.reified_primitive_vec,
      ),
      reifiedObjectVec: decodeFromFields(
        reified.vector(Bar1.reified()),
        fields.reified_object_vec,
      ),
      genericVec: decodeFromFields(reified.vector(typeArg), fields.generic_vec),
      genericVecNested: decodeFromFields(
        reified.vector(WithTwoGenerics1.reified(typeArg, "u8")),
        fields.generic_vec_nested,
      ),
      twoGenerics: decodeFromFields(
        WithTwoGenerics1.reified(typeArg, Bar1.reified()),
        fields.two_generics,
      ),
      twoGenericsReifiedPrimitive: decodeFromFields(
        WithTwoGenerics1.reified("u16", "u64"),
        fields.two_generics_reified_primitive,
      ),
      twoGenericsReifiedObject: decodeFromFields(
        WithTwoGenerics1.reified(Bar1.reified(), Bar1.reified()),
        fields.two_generics_reified_object,
      ),
      twoGenericsNested: decodeFromFields(
        WithTwoGenerics1.reified(typeArg, WithTwoGenerics1.reified("u8", "u8")),
        fields.two_generics_nested,
      ),
      twoGenericsReifiedNested: decodeFromFields(
        WithTwoGenerics1.reified(
          Bar1.reified(),
          WithTwoGenerics1.reified("u8", "u8"),
        ),
        fields.two_generics_reified_nested,
      ),
      twoGenericsNestedVec: decodeFromFields(
        reified.vector(
          WithTwoGenerics1.reified(
            Bar1.reified(),
            reified.vector(WithTwoGenerics1.reified(typeArg, "u8")),
          ),
        ),
        fields.two_generics_nested_vec,
      ),
      dummy: decodeFromFields(Dummy1.reified(), fields.dummy),
      other: decodeFromFields(StructFromOtherModule.reified(), fields.other),
    });
  }

  static fromFieldsWithTypes<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): Foo<ToTypeArgument<T>> {
    if (!isFoo(item.type)) {
      throw new Error("not a Foo type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return Foo.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      generic: decodeFromFieldsWithTypes(typeArg, item.fields.generic),
      reifiedPrimitiveVec: decodeFromFieldsWithTypes(
        reified.vector("u64"),
        item.fields.reified_primitive_vec,
      ),
      reifiedObjectVec: decodeFromFieldsWithTypes(
        reified.vector(Bar1.reified()),
        item.fields.reified_object_vec,
      ),
      genericVec: decodeFromFieldsWithTypes(
        reified.vector(typeArg),
        item.fields.generic_vec,
      ),
      genericVecNested: decodeFromFieldsWithTypes(
        reified.vector(WithTwoGenerics1.reified(typeArg, "u8")),
        item.fields.generic_vec_nested,
      ),
      twoGenerics: decodeFromFieldsWithTypes(
        WithTwoGenerics1.reified(typeArg, Bar1.reified()),
        item.fields.two_generics,
      ),
      twoGenericsReifiedPrimitive: decodeFromFieldsWithTypes(
        WithTwoGenerics1.reified("u16", "u64"),
        item.fields.two_generics_reified_primitive,
      ),
      twoGenericsReifiedObject: decodeFromFieldsWithTypes(
        WithTwoGenerics1.reified(Bar1.reified(), Bar1.reified()),
        item.fields.two_generics_reified_object,
      ),
      twoGenericsNested: decodeFromFieldsWithTypes(
        WithTwoGenerics1.reified(typeArg, WithTwoGenerics1.reified("u8", "u8")),
        item.fields.two_generics_nested,
      ),
      twoGenericsReifiedNested: decodeFromFieldsWithTypes(
        WithTwoGenerics1.reified(
          Bar1.reified(),
          WithTwoGenerics1.reified("u8", "u8"),
        ),
        item.fields.two_generics_reified_nested,
      ),
      twoGenericsNestedVec: decodeFromFieldsWithTypes(
        reified.vector(
          WithTwoGenerics1.reified(
            Bar1.reified(),
            reified.vector(WithTwoGenerics1.reified(typeArg, "u8")),
          ),
        ),
        item.fields.two_generics_nested_vec,
      ),
      dummy: decodeFromFieldsWithTypes(Dummy1.reified(), item.fields.dummy),
      other: decodeFromFieldsWithTypes(
        StructFromOtherModule.reified(),
        item.fields.other,
      ),
    });
  }

  static fromBcs<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    data: Uint8Array,
  ): Foo<ToTypeArgument<T>> {
    const typeArgs = [typeArg];

    return Foo.fromFields(typeArg, Foo.bcs(toBcs(typeArgs[0])).parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      generic: fieldToJSON<T>(this.$typeArgs[0], this.generic),
      reifiedPrimitiveVec: fieldToJSON<Vector<"u64">>(
        `vector<u64>`,
        this.reifiedPrimitiveVec,
      ),
      reifiedObjectVec: fieldToJSON<Vector<Bar1>>(
        `vector<${Bar1.$typeName}>`,
        this.reifiedObjectVec,
      ),
      genericVec: fieldToJSON<Vector<T>>(
        `vector<${this.$typeArgs[0]}>`,
        this.genericVec,
      ),
      genericVecNested: fieldToJSON<Vector<WithTwoGenerics1<T, "u8">>>(
        `vector<${WithTwoGenerics1.$typeName}<${this.$typeArgs[0]}, u8>>`,
        this.genericVecNested,
      ),
      twoGenerics: this.twoGenerics.toJSONField(),
      twoGenericsReifiedPrimitive:
        this.twoGenericsReifiedPrimitive.toJSONField(),
      twoGenericsReifiedObject: this.twoGenericsReifiedObject.toJSONField(),
      twoGenericsNested: this.twoGenericsNested.toJSONField(),
      twoGenericsReifiedNested: this.twoGenericsReifiedNested.toJSONField(),
      twoGenericsNestedVec: fieldToJSON<
        Vector<WithTwoGenerics1<Bar1, Vector<WithTwoGenerics1<T, "u8">>>>
      >(
        `vector<${WithTwoGenerics1.$typeName}<${Bar1.$typeName}, vector<${WithTwoGenerics1.$typeName}<${this.$typeArgs[0]}, u8>>>>`,
        this.twoGenericsNestedVec,
      ),
      dummy: this.dummy.toJSONField(),
      other: this.other.toJSONField(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    field: any,
  ): Foo<ToTypeArgument<T>> {
    return Foo.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      generic: decodeFromJSONField(typeArg, field.generic),
      reifiedPrimitiveVec: decodeFromJSONField(
        reified.vector("u64"),
        field.reifiedPrimitiveVec,
      ),
      reifiedObjectVec: decodeFromJSONField(
        reified.vector(Bar1.reified()),
        field.reifiedObjectVec,
      ),
      genericVec: decodeFromJSONField(
        reified.vector(typeArg),
        field.genericVec,
      ),
      genericVecNested: decodeFromJSONField(
        reified.vector(WithTwoGenerics1.reified(typeArg, "u8")),
        field.genericVecNested,
      ),
      twoGenerics: decodeFromJSONField(
        WithTwoGenerics1.reified(typeArg, Bar1.reified()),
        field.twoGenerics,
      ),
      twoGenericsReifiedPrimitive: decodeFromJSONField(
        WithTwoGenerics1.reified("u16", "u64"),
        field.twoGenericsReifiedPrimitive,
      ),
      twoGenericsReifiedObject: decodeFromJSONField(
        WithTwoGenerics1.reified(Bar1.reified(), Bar1.reified()),
        field.twoGenericsReifiedObject,
      ),
      twoGenericsNested: decodeFromJSONField(
        WithTwoGenerics1.reified(typeArg, WithTwoGenerics1.reified("u8", "u8")),
        field.twoGenericsNested,
      ),
      twoGenericsReifiedNested: decodeFromJSONField(
        WithTwoGenerics1.reified(
          Bar1.reified(),
          WithTwoGenerics1.reified("u8", "u8"),
        ),
        field.twoGenericsReifiedNested,
      ),
      twoGenericsNestedVec: decodeFromJSONField(
        reified.vector(
          WithTwoGenerics1.reified(
            Bar1.reified(),
            reified.vector(WithTwoGenerics1.reified(typeArg, "u8")),
          ),
        ),
        field.twoGenericsNestedVec,
      ),
      dummy: decodeFromJSONField(Dummy1.reified(), field.dummy),
      other: decodeFromJSONField(StructFromOtherModule.reified(), field.other),
    });
  }

  static fromJSON<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    json: Record<string, any>,
  ): Foo<ToTypeArgument<T>> {
    if (json.$typeName !== Foo.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Foo.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return Foo.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    content: SuiParsedData,
  ): Foo<ToTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isFoo(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Foo object`,
      );
    }
    return Foo.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    data: SuiObjectData,
  ): Foo<ToTypeArgument<T>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isFoo(data.bcs.type)) {
        throw new Error(`object at is not a Foo object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = compressSuiType(gotTypeArgs[0]);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (gotTypeArg !== compressSuiType(extractType(typeArg))) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`,
        );
      }

      return Foo.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Foo.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends Reified<TypeArgument, any>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<Foo<ToTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Foo object at id ${id}: ${res.error.code}`,
      );
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isFoo(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Foo object`);
    }

    return Foo.fromSuiObjectData(typeArg, res.data);
  }
}
