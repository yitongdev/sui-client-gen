import * as reified from "../../../../../_framework/reified.js";
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
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../../../_framework/util.js";
import { Vector } from "../../../../../_framework/vector.js";
import { PKG_V1 } from "../../constants.js";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isHotPotatoVector(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::hot_potato_vector::HotPotatoVector` + "<");
}

export interface HotPotatoVectorFields<T0 extends TypeArgument> {
  contents: ToField<Vector<T0>>;
}

export type HotPotatoVectorReified<T0 extends TypeArgument> = Reified<
  HotPotatoVector<T0>,
  HotPotatoVectorFields<T0>
>;

/**
 * Move struct: `HotPotatoVector`
 * Module: `8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::hot_potato_vector`
 *
 * @typeParam T0 - Type parameter 0
 */
export class HotPotatoVector<T0 extends TypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::hot_potato_vector::HotPotatoVector`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [false] as const;

  readonly $typeName = HotPotatoVector.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::hot_potato_vector::HotPotatoVector<${ToTypeStr<T0>}>`;
  readonly $typeArgs: [ToTypeStr<T0>];
  readonly $isPhantom = HotPotatoVector.$isPhantom;

  readonly contents: ToField<Vector<T0>>;

  private constructor(
    typeArgs: [ToTypeStr<T0>],
    fields: HotPotatoVectorFields<T0>,
  ) {
    this.$fullTypeName = composeSuiType(
      HotPotatoVector.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::hot_potato_vector::HotPotatoVector<${ToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.contents = fields.contents;
  }

  static reified<T0 extends Reified<TypeArgument, any>>(
    T0: T0,
  ): HotPotatoVectorReified<ToTypeArgument<T0>> {
    return {
      typeName: HotPotatoVector.$typeName,
      fullTypeName: composeSuiType(
        HotPotatoVector.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V1}::hot_potato_vector::HotPotatoVector<${ToTypeStr<ToTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [ToTypeStr<ToTypeArgument<T0>>],
      isPhantom: HotPotatoVector.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) =>
        HotPotatoVector.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        HotPotatoVector.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => HotPotatoVector.fromBcs(T0, data),
      bcs: HotPotatoVector.bcs(toBcs(T0)),
      fromJSONField: (field: any) => HotPotatoVector.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) =>
        HotPotatoVector.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        HotPotatoVector.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        HotPotatoVector.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        HotPotatoVector.fetch(client, T0, id),
      new: (fields: HotPotatoVectorFields<ToTypeArgument<T0>>) => {
        return new HotPotatoVector([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return HotPotatoVector.reified;
  }

  static phantom<T0 extends Reified<TypeArgument, any>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<HotPotatoVector<ToTypeArgument<T0>>>> {
    return phantom(HotPotatoVector.reified(T0));
  }
  static get p() {
    return HotPotatoVector.phantom;
  }

  static get bcs() {
    return <T0 extends BcsType<any>>(T0: T0) =>
      bcs.struct(`HotPotatoVector<${T0.name}>`, {
        contents: bcs.vector(T0),
      });
  }

  static fromFields<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): HotPotatoVector<ToTypeArgument<T0>> {
    return HotPotatoVector.reified(typeArg).new({
      contents: decodeFromFields(reified.vector(typeArg), fields.contents),
    });
  }

  static fromFieldsWithTypes<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): HotPotatoVector<ToTypeArgument<T0>> {
    if (!isHotPotatoVector(item.type)) {
      throw new Error("not a HotPotatoVector type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return HotPotatoVector.reified(typeArg).new({
      contents: decodeFromFieldsWithTypes(
        reified.vector(typeArg),
        item.fields.contents,
      ),
    });
  }

  static fromBcs<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    data: Uint8Array,
  ): HotPotatoVector<ToTypeArgument<T0>> {
    return HotPotatoVector.fromFields(
      typeArg,
      HotPotatoVector.bcs(toBcs(typeArg)).parse(data),
    );
  }

  toJSONField() {
    return {
      contents: fieldToJSON<Vector<T0>>(
        `vector<${this.$typeArgs?.[0]}>`,
        this.contents,
      ),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    field: any,
  ): HotPotatoVector<ToTypeArgument<T0>> {
    return HotPotatoVector.reified(typeArg).new({
      contents: decodeFromJSONField(reified.vector(typeArg), field.contents),
    });
  }

  static fromJSON<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    json: Record<string, any>,
  ): HotPotatoVector<ToTypeArgument<T0>> {
    if (json.$typeName !== HotPotatoVector.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(HotPotatoVector.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return HotPotatoVector.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    content: SuiParsedData,
  ): HotPotatoVector<ToTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isHotPotatoVector(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a HotPotatoVector object`,
      );
    }
    return HotPotatoVector.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    data: SuiObjectData,
  ): HotPotatoVector<ToTypeArgument<T0>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isHotPotatoVector(data.bcs.type)
      ) {
        throw new Error(`object at is not a HotPotatoVector object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = gotTypeArgs[0] as string;
      const compressedGotType = compressSuiType(gotTypeArg);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (compressedGotType !== expectedTypeArg) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
        );
      }

      return HotPotatoVector.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return HotPotatoVector.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends Reified<TypeArgument, any>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<HotPotatoVector<ToTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching HotPotatoVector object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isHotPotatoVector(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a HotPotatoVector object`);
    }

    return HotPotatoVector.fromSuiObjectData(typeArg, res.data);
  }
}
