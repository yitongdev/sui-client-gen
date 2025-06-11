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
import { Option } from "../../../0x1/option/structs/index.js";
import { PKG_V35 } from "../../constants.js";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isReferent(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V35}::borrow::Referent` + "<");
}

export interface ReferentFields<T0 extends TypeArgument> {
  id: ToField<"address">;
  value: ToField<Option<T0>>;
}

export type ReferentReified<T0 extends TypeArgument> = Reified<
  Referent<T0>,
  ReferentFields<T0>
>;

/**
 * Move struct: `Referent`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::borrow`
 *
 * @typeParam T0 - Type parameter 0
 */
export class Referent<T0 extends TypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::borrow::Referent`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [false] as const;

  readonly $typeName = Referent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::borrow::Referent<${ToTypeStr<T0>}>`;
  readonly $typeArgs: [ToTypeStr<T0>];
  readonly $isPhantom = Referent.$isPhantom;

  readonly id: ToField<"address">;
  readonly value: ToField<Option<T0>>;

  private constructor(typeArgs: [ToTypeStr<T0>], fields: ReferentFields<T0>) {
    this.$fullTypeName = composeSuiType(
      Referent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::borrow::Referent<${ToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.value = fields.value;
  }

  static reified<T0 extends Reified<TypeArgument, any>>(
    T0: T0,
  ): ReferentReified<ToTypeArgument<T0>> {
    return {
      typeName: Referent.$typeName,
      fullTypeName: composeSuiType(
        Referent.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V35}::borrow::Referent<${ToTypeStr<ToTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [ToTypeStr<ToTypeArgument<T0>>],
      isPhantom: Referent.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) =>
        Referent.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Referent.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => Referent.fromBcs(T0, data),
      bcs: Referent.bcs(toBcs(T0)),
      fromJSONField: (field: any) => Referent.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => Referent.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Referent.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Referent.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        Referent.fetch(client, T0, id),
      new: (fields: ReferentFields<ToTypeArgument<T0>>) => {
        return new Referent([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Referent.reified;
  }

  static phantom<T0 extends Reified<TypeArgument, any>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<Referent<ToTypeArgument<T0>>>> {
    return phantom(Referent.reified(T0));
  }
  static get p() {
    return Referent.phantom;
  }

  static get bcs() {
    return <T0 extends BcsType<any>>(T0: T0) =>
      bcs.struct(`Referent<${T0.name}>`, {
        id: bcs.bytes(32).transform({
          input: (val: string) => fromHex(val),
          output: (val: Uint8Array) => toHex(val),
        }),
        value: Option.bcs(T0),
      });
  }

  static fromFields<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): Referent<ToTypeArgument<T0>> {
    return Referent.reified(typeArg).new({
      id: decodeFromFields("address", fields.id),
      value: decodeFromFields(Option.reified(typeArg), fields.value),
    });
  }

  static fromFieldsWithTypes<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): Referent<ToTypeArgument<T0>> {
    if (!isReferent(item.type)) {
      throw new Error("not a Referent type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return Referent.reified(typeArg).new({
      id: decodeFromFieldsWithTypes("address", item.fields.id),
      value: decodeFromFieldsWithTypes(
        Option.reified(typeArg),
        item.fields.value,
      ),
    });
  }

  static fromBcs<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    data: Uint8Array,
  ): Referent<ToTypeArgument<T0>> {
    return Referent.fromFields(
      typeArg,
      Referent.bcs(toBcs(typeArg)).parse(data),
    );
  }

  toJSONField() {
    return {
      id: this.id,
      value: fieldToJSON<Option<T0>>(
        `${Option.$typeName}<${this.$typeArgs?.[0]}>`,
        this.value,
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
  ): Referent<ToTypeArgument<T0>> {
    return Referent.reified(typeArg).new({
      id: decodeFromJSONField("address", field.id),
      value: decodeFromJSONField(Option.reified(typeArg), field.value),
    });
  }

  static fromJSON<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    json: Record<string, any>,
  ): Referent<ToTypeArgument<T0>> {
    if (json.$typeName !== Referent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Referent.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return Referent.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    content: SuiParsedData,
  ): Referent<ToTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isReferent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Referent object`,
      );
    }
    return Referent.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    data: SuiObjectData,
  ): Referent<ToTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isReferent(data.bcs.type)) {
        throw new Error(`object at is not a Referent object`);
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

      return Referent.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Referent.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends Reified<TypeArgument, any>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<Referent<ToTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Referent object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isReferent(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Referent object`);
    }

    return Referent.fromSuiObjectData(typeArg, res.data);
  }
}
