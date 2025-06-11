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
import { UID } from "../../../sui-chain/object/structs/index.js";
import { PKG_V1 } from "../../constants.js";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isWithGenericField(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::fixture::WithGenericField` + "<");
}

export interface WithGenericFieldFields<T0 extends TypeArgument> {
  id: ToField<UID>;
  genericField: ToField<T0>;
}

export type WithGenericFieldReified<T0 extends TypeArgument> = Reified<
  WithGenericField<T0>,
  WithGenericFieldFields<T0>
>;

/**
 * Move struct: `WithGenericField`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::fixture`
 *
 * @typeParam T0 - Type parameter 0
 */
export class WithGenericField<T0 extends TypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::fixture::WithGenericField`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [false] as const;

  readonly $typeName = WithGenericField.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::fixture::WithGenericField<${ToTypeStr<T0>}>`;
  readonly $typeArgs: [ToTypeStr<T0>];
  readonly $isPhantom = WithGenericField.$isPhantom;

  readonly id: ToField<UID>;
  readonly genericField: ToField<T0>;

  private constructor(
    typeArgs: [ToTypeStr<T0>],
    fields: WithGenericFieldFields<T0>,
  ) {
    this.$fullTypeName = composeSuiType(
      WithGenericField.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::fixture::WithGenericField<${ToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.genericField = fields.genericField;
  }

  static reified<T0 extends Reified<TypeArgument, any>>(
    T0: T0,
  ): WithGenericFieldReified<ToTypeArgument<T0>> {
    return {
      typeName: WithGenericField.$typeName,
      fullTypeName: composeSuiType(
        WithGenericField.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V1}::fixture::WithGenericField<${ToTypeStr<ToTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [ToTypeStr<ToTypeArgument<T0>>],
      isPhantom: WithGenericField.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) =>
        WithGenericField.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        WithGenericField.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => WithGenericField.fromBcs(T0, data),
      bcs: WithGenericField.bcs(toBcs(T0)),
      fromJSONField: (field: any) => WithGenericField.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) =>
        WithGenericField.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        WithGenericField.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        WithGenericField.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        WithGenericField.fetch(client, T0, id),
      new: (fields: WithGenericFieldFields<ToTypeArgument<T0>>) => {
        return new WithGenericField([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return WithGenericField.reified;
  }

  static phantom<T0 extends Reified<TypeArgument, any>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<WithGenericField<ToTypeArgument<T0>>>> {
    return phantom(WithGenericField.reified(T0));
  }
  static get p() {
    return WithGenericField.phantom;
  }

  static get bcs() {
    return <T0 extends BcsType<any>>(T0: T0) =>
      bcs.struct(`WithGenericField<${T0.name}>`, {
        id: UID.bcs,
        generic_field: T0,
      });
  }

  static fromFields<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): WithGenericField<ToTypeArgument<T0>> {
    return WithGenericField.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      genericField: decodeFromFields(typeArg, fields.generic_field),
    });
  }

  static fromFieldsWithTypes<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): WithGenericField<ToTypeArgument<T0>> {
    if (!isWithGenericField(item.type)) {
      throw new Error("not a WithGenericField type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return WithGenericField.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      genericField: decodeFromFieldsWithTypes(
        typeArg,
        item.fields.generic_field,
      ),
    });
  }

  static fromBcs<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    data: Uint8Array,
  ): WithGenericField<ToTypeArgument<T0>> {
    return WithGenericField.fromFields(
      typeArg,
      WithGenericField.bcs(toBcs(typeArg)).parse(data),
    );
  }

  toJSONField() {
    return {
      id: this.id,
      genericField: fieldToJSON<T0>(this.$typeArgs?.[0], this.genericField),
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
  ): WithGenericField<ToTypeArgument<T0>> {
    return WithGenericField.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      genericField: decodeFromJSONField(typeArg, field.genericField),
    });
  }

  static fromJSON<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    json: Record<string, any>,
  ): WithGenericField<ToTypeArgument<T0>> {
    if (json.$typeName !== WithGenericField.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(WithGenericField.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return WithGenericField.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    content: SuiParsedData,
  ): WithGenericField<ToTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isWithGenericField(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a WithGenericField object`,
      );
    }
    return WithGenericField.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    data: SuiObjectData,
  ): WithGenericField<ToTypeArgument<T0>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isWithGenericField(data.bcs.type)
      ) {
        throw new Error(`object at is not a WithGenericField object`);
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

      return WithGenericField.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return WithGenericField.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends Reified<TypeArgument, any>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<WithGenericField<ToTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching WithGenericField object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isWithGenericField(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a WithGenericField object`);
    }

    return WithGenericField.fromSuiObjectData(typeArg, res.data);
  }
}
